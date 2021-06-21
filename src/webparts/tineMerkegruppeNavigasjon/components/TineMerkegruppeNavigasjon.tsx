import * as React from 'react';
import styles from './TineMerkegruppeNavigasjon.module.scss';
import { ITineMerkegruppeNavigasjonProps } from './ITineMerkegruppeNavigasjonProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class TineMerkegruppeNavigasjon extends React.Component<ITineMerkegruppeNavigasjonProps, {}> {
  public render(): React.ReactElement<ITineMerkegruppeNavigasjonProps> {
    return (
      <div className={ styles.tineMerkegruppeNavigasjon }>
        <div className={ styles.container }>
         
        </div>
      </div>
    );
  }
}
