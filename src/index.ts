import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlabs-composable-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlabs-composable-theme:plugin',
  description: 'A JupyterLab extension for Composable Analytics.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlabs-composable-theme is activated!');
    const style = 'jupyterlabs-composable-theme/index.css';

    manager.register({
      name: 'jupyterlabs-composable-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
