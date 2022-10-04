export const ENVIRONMENT = {
  DOCKER: 'docker',
  LOCAL: 'local',
  DEVELOPMENT: 'development',
  TEST: 'test',
  QA: 'qa',
  PRE: 'preproduction',
  PRO: 'production',
};

export const LOCAL_ENVIRONMENT = [ENVIRONMENT.LOCAL, ENVIRONMENT.DOCKER];

export const PRODUCTIVE_ENVIRONMENT = [ENVIRONMENT.PRE, ENVIRONMENT.PRO];
