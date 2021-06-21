import { MSGraphClient } from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { GraphError } from '@microsoft/microsoft-graph-client';

export class MSGraphService {
  private static _graphClient: MSGraphClient;

  public static async init(context: WebPartContext) {
    try {
      this._graphClient = await context.msGraphClientFactory.getClient();
      console.log("initiated graph client");
    } catch (e) {
      console.error(e);
    }
  }

  public static Get(apiUrl: string, selectedProperties?: string[], filter?: string, version: string = 'v1.0'): Promise<any> {
    var p = new Promise<string>(async (resolve, reject) => {
      let query = this._graphClient.api(apiUrl).version(version);
      if (selectedProperties && selectedProperties.length > 0) {
        query = query.select(selectedProperties);
      }
      if (filter && filter.length > 0) {
        query = query.filter(filter);
      }

      await query.get((error: GraphError, response: any, rawResponse?: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });

    return p;
  }

}
