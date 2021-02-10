const prefix = 'REACT_APP_'

export const extractEnv = (key: string): string | undefined => process.env[`${prefix}${key}`]

export enum Environments {
	LOCAL = 'local',
	DEVELOPMENT = 'development',
	PRODUCTION = 'production',
}

export const applyOnEnvironment = (
  local: () => string,
  development: () => string,
  production: () => string,
): string => {
	switch (extractEnv('NODE_ENV')) {
		case 'local':
			return local()
		case 'development':
			return development()
		case 'production':
			return production()
		default:
			return ''
	}
}
