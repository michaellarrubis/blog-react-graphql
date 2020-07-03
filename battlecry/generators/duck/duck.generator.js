import { Generator, File, namedCasex, casex, log } from 'battlecry';

const CONFIG_FILE = 'configureStore.js';
const REDUX_PATH = 'src/redux/modules';

export default class DuckGenerator extends Generator {
  config = {
    init: {
      description: 'Create configStore.js file and an example duck'
    },
    generate: {
      args: 'name ...actions?',
      description: 'Create or modify duck to add actions'
    }
  };

  get configFile() {
    const template = this.template(CONFIG_FILE);
    const path = `${REDUX_PATH}/index.js`;

    return new File(path);
  }

  get actions() {
    return (this.args.actions || ['set']).reverse();
  }

  init() {
    const configFile = this.configFile;
    if(configFile.exists) return log.warn(`Modular ducks have already been initiated. Please check the ${configFile.path} file`);

    this.template(CONFIG_FILE).saveAs(configFile.path);
    this.generator('duck').setArgs({name: 'todo'}).play('generate');
  }

  generate() {
    this.addActionTypes();
    this.addActions();
    this.addSaga();
    this.addToSagaIndex();
    this.addReducer();
    this.addDuckToConfig();
  }

  addActionTypes() {
    const template = this.template('actionTypeTemplate.js');
    const path = `${REDUX_PATH}/${this.args.name}/${this.args.name}Types.js`;

    let file = new File(path, this.args.name);
    if(!file.exists) file = template;

    this.actions.forEach(action => {
      file.after('// exportActionTypes', `export const __NA_ME__ = '${casex(this.args.name, 'na-me')}/__NA-ME__';`, action)
    });

    file.saveAs(path, this.args.name);
  }

  addActions() {
    const template = this.template('actionTemplate.js');
    const path = `${REDUX_PATH}/${this.args.name}/${this.args.name}Actions.js`;

    let file = new File(path, this.args.name);
    if(!file.exists) file = template;

    this.actions.forEach(action => {
      // file.after('// Actions', `const __NA_ME__ = '${casex(this.args.name, 'na-me')}/__NA-ME__';`, action);

      file.after('// ImportActionType', `import { __NA_ME__ } from './${this.args.name}Types';`, action);

      file.after('// Action Creators', [
        namedCasex('export function __naMe__(data) {', + `${action}_${this.args.name}`),
        '  return { type: __NA_ME__ , payload: data };',
        '}',
        ''
      ], action);
    });

    file.saveAs(path, this.args.name);
  }

  addSaga() {
    const template = this.template('sagaTemplate.js');
    const path = `${REDUX_PATH}/${this.args.name}/${this.args.name}Saga.js`;

    let file = new File(path, this.args.name);
    if(!file.exists) file = template;

    this.actions.forEach(action => {
      file.after('// Actions', `import { __NA_ME__ } from './${this.args.name}Types';`, action);

      file.after('// reqFunction', [
        'function __naMe__Req(data) {',
        '  let url = "https://jsonplaceholder.typicode.com/todos"',
        '  return axios.get(url)',
        '}',
        ''
      ], action);

      file.after('// exportFuntion', [
        'export function* __naMe__(action) {',
        '  try {',
        '    let response = yield call(__naMe__Req, action.payload)',
        '    yield put({ type: `${__NA_ME__}_SUCCESS`, payload: response.data })',
        '  } catch(e) {',
        '    yield put({ type: `${__NA_ME__}_FAIL`, payload: e.response })',
        '  }',
        '}',
        ''
      ], action);
    });

    file.saveAs(path, this.args.name);
  }

  addToSagaIndex() {
    const file = new File('src/redux/saga.js');
    if(!file.exists) return null;

    this.actions.forEach(action => {
      file.after('// actionTypes', `import { __NA_ME__  } from './modules/${this.args.name}/${this.args.name}Types.js';`, action);
      file.after('// sagaActions', `import { __naMe__  } from './modules/${this.args.name}/${this.args.name}Saga.js';`, action)
      file.after('all([', `    takeLatest(__NA_ME__, __naMe__),`, action)
      file.save();
    })
  }

  addReducer() {
    const template = this.template('_*');
    const path = `${REDUX_PATH}/${this.args.name}/${this.args.name}Reducer.js`;

    let file = new File(path, this.args.name);
    if(!file.exists) file = template;

    this.actions.forEach(action => {
      // file.after('// Actions', `const __NA_ME__ = '${casex(this.args.name, 'na-me')}/__NA-ME__';`, action);

      file.after('// ImportActionType', `import { __NA_ME__ } from './${this.args.name}Types';`, action);

      file.after('switch (action.type) {', [
        '    case __NA_ME__:',
        '      // Perform action',
        '      return state;',
        '    case `${__NA_ME__}_SUCCESS`:',
        '      // Perform action',
        '      return state;',
        '    case `${__NA_ME__}_FAIL`:',
        '      // Perform action',
        '      return state;'
      ], action);
    });

    file.saveAs(path, this.args.name);
  }

  addDuckToConfig() {
    const file = this.configFile;
    if(!file.exists) return null;

    let isAlreadyImported = false
    try {
      isAlreadyImported = file.search("import __naMe__ from './__naMe__/__naMe__Reducer'", this.args.name)
    } catch (e) {
      isAlreadyImported = false
    }

    if(!isAlreadyImported) {
      file
      .after('// reducerImports', "import __naMe__ from './__naMe__/__naMe__Reducer'", this.args.name)
      .after('combineReducers({', '  __naMe__,', this.args.name)
      .save();
    }
    console.log('isAlreadyImported', isAlreadyImported)
  }
}
