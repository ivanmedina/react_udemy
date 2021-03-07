// la siguiente libreria sirve para hacer pruebas a
// nuestros componentes react que se renderizan en 
// el dom, alternativamente existe la libreria enzyme

// import '@testing-library/jest-dom/extend-expect' 

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode:'deep'}));