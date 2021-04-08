import {Router, useRouter} from 'next/router';
import Waiver from '../../components/waiver';
import {useQuery} from 'react-query';
import {getWaiverForStudent} from '../../data';
import Spinner from '@components/spinner';
import Error from '@components/error';
import {useEffect, useState} from 'react';

export default function StudentWaiver(props) {
  const [id, setId] = useState();
  const router = useRouter();
  const {studentId, env = 'prod'} = router.query;

  useEffect(() => {
    setId(studentId);
  }, [studentId]);

  const {data, status} = useQuery(['waiver', id], async (key, sID) => {
    const waiver = await getWaiverForStudent({
      studentId: id,
      env,
    });

    return waiver?.json();
  });

  if (status === 'loading') {
    return (
      <Spinner
        className="w-full h-auto text-2xl text-white"
        label="Fetching waiver.."
      />
    );
  }

  if (status === 'error') {
    return <Error />;
  }

  if (!data) {
    router.push({
      pathname: '/501',
      as: '/invalid/env',
    });
    return null;
  }

  if (data.WaiverStatus === 'Signed') {
    router.push({
      pathname: '/confirmation',
      as: '/confirmation',
      query: {
        WaiverUrl: data.WaiverUrl,
        FirstName: data.FirstName,
        LastName: data.LastName,
      },
    });
  }

  return (
    <div className="overflow-y-scroll">
      {data ? (
        <Waiver {...data} env={env} studentId={studentId} />
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}
