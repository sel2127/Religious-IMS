import { configure } from '@testing-library/cypress';
import 'cypress-file-upload'

import './support/commands';
configure({
  /**
   * Make Cypress use the React testing library for querying the DOM.
   */
  useReactQuery: true,
});