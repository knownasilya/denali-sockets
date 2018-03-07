import { Blueprint } from '@denali-js/cli';

// This blueprint is run when denali-sockets is installed via `denali install`. It's a good spot to
// make any changes to the consuming app or addon, i.e. create a config file, add a route, etc
export default class DenaliSocketsBlueprint extends Blueprint {

  static blueprintName = 'denali-sockets';
  static description = 'Installs denali-sockets';

  locals(/* argv */) {}

}
