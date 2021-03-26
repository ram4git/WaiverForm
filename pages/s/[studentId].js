import {useRouter} from 'next/router';
import Waiver from '../../components/waiver';
import {useQuery} from 'react-query';
import {getWaiverForStudent} from '../../data';
import Spinner from '@components/spinner';

export default function StudentWaiver(props) {
  const router = useRouter();
  const {studentId, env} = router.query;

  console.log('STUDENT ID=', studentId);
  console.log('ENV=', env);

  const {data, status} = useQuery(
    ['waiver', studentId],
    async (key, studentId) => {
      console.log('S=', studentId);
      const waiver = await getWaiverForStudent({
        studentId: 'b35da509-70ba-40b9-becf-9569c5c2fc82',
        env,
      });

      return waiver.json();
    },
  );

  if (status === 'loading') {
    return (
      <Spinner
        className="w-full h-auto text-2xl text-white"
        label="Fetching waiver.."
      />
    );
  }

  console.log('WAIVER=', data);

  return (
    <div className="overflow-y-scroll">
      {data ? <Waiver {...data} /> : <p>No Data</p>}
    </div>
  );
}
