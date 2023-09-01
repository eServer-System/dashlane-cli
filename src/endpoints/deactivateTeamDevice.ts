import { Secrets } from '../types.js';
import { requestUserApi } from '../requestApi.js';

export interface DeactivateTeamDeviceParams {
    teamDeviceAccessKey: string;
    secrets: Secrets;
}

export const deactivateTeamDevice = (params: DeactivateTeamDeviceParams) =>
    requestUserApi<DeactivateTeamDeviceOutput>({
        path: 'teams/DeactivateTeamDevice',
        login: params.secrets.login,
        deviceKeys: {
            accessKey: params.secrets.accessKey,
            secretKey: params.secrets.secretKey,
        },
        payload: {
            teamDeviceAccessKey: params.teamDeviceAccessKey,
        },
    });

export interface DeactivateTeamDeviceOutput {}
