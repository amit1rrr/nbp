import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';


/**
 * Initialization data for the nbp extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'nbp',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nbp is activated!');
  }
};

export default extension;
