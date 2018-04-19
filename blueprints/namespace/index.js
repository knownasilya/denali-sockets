import {
  upperFirst,
  camelCase,
  lowerCase,
  kebabCase
} from 'lodash';
import { singularize, pluralize } from 'inflection';
import { Blueprint, unwrap } from '@denali-js/cli';

/**
 * Generates a model, serializer, CRUD actions, and tests for a resource
 *
 * @package blueprints
 */
export default class NamespaceBlueprint extends Blueprint {

  /* tslint:disable:completed-docs typedef */
  static blueprintName = 'namespace';
  static description = 'Generates a namespace which could optionally have rooms';
  static longDescription = unwrap`
    Usage: denali generate namespace <name> [options]
    Generates a namespace that a socket can connect to.
    The provided name will be pluralized as a convention.
    A namespace can optionally have rooms attached.
  `;

  static params = '<name>';

  locals(argv) {
    let name = argv.name;
    name = pluralize(name);
    let plural = {
      name,
      camelCased: camelCase(name),
      className: upperFirst(camelCase(name)),
      dasherized: kebabCase(name),
      humanized: lowerCase(name)
    };
    name = singularize(name);
    let singular = {
      name,
      camelCased: camelCase(name),
      className: upperFirst(camelCase(name)),
      dasherized: kebabCase(name),
      humanized: lowerCase(name)
    };
    return { plural, singular };
  }

}