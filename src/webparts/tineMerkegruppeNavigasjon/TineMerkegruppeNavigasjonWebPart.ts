import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'TineMerkegruppeNavigasjonWebPartStrings';
import TineMerkegruppeNavigasjon from './components/TineMerkegruppeNavigasjon';
import { ITineMerkegruppeNavigasjonProps } from './components/ITineMerkegruppeNavigasjonProps';
import { MSGraphService } from '../../Services/MSGraphService';

export interface ITineMerkegruppeNavigasjonWebPartProps {
  description: string;
}

export default class TineMerkegruppeNavigasjonWebPart extends BaseClientSideWebPart<ITineMerkegruppeNavigasjonWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITineMerkegruppeNavigasjonProps> = React.createElement(
      TineMerkegruppeNavigasjon,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  public onInit(): Promise<void> {

      console.log("Tine Merkegruppe - navigasjon init");

      MSGraphService.init(this.context);
    
      return Promise.resolve();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
