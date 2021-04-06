const envToEndpointMap = {
  qa: 'https://budotap-api-qa.azurewebsites.net/api',
  local: 'https://budotap-api-qa.azurewebsites.net/api',
  uat: 'https://budotap-api-sandbox.azurewebsites.net/api',
  prod: 'https://budotapapi.azurewebsites.net/api',
  sandbox: 'https://budotap-api-sandbox.azurewebsites.net/api',
  production: 'https://budotapapi.azurewebsites.net/api',
};

const DEFAULT_ENV = 'prod';

export const getWaiverForStudent = props => {
  const {studentId, env} = props;
  return fetch(
    `${
      envToEndpointMap[env || DEFAULT_ENV]
    }/school/waiver/generate/new/${studentId}`,
  );
};

export const postWaiverForm = props => {
  const {payload, env} = props;
  return fetch(`${envToEndpointMap[env || DEFAULT_ENV]}/school/waiver/update`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};
