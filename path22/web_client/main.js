import events from '@girder/core/events';
import router from '@girder/core/router';

import { registerPluginNamespace } from '@girder/core/pluginUtils';
import { exposePluginConfig } from '@girder/core/utilities/PluginUtils';

// expose symbols under girder.plugins
import * as path22 from '@girder/path22';

const pluginName = 'path22';
const configRoute = `plugins/${pluginName}/config`;

registerPluginNamespace(pluginName, path22);

exposePluginConfig(pluginName, configRoute);
