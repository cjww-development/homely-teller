/*
 * Copyright 2020 CJWW Development
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports.LaunchRequestHandler = require("./LaunchRequestHandler");
module.exports.TemperatureTellerHandler = require("./TemperatureTellerHandler");
module.exports.HelpIntentHandler = require("./HelpIntentHandler");
module.exports.CancelAndStopHandler = require("./CancelAndStopHandler");
module.exports.FallbackHandler = require("./FallbackHandler");
module.exports.SessionEndedRequestHandler = require("./SessionEndedRequestHandler");
module.exports.IntentReflectorHandler = require("./IntentReflectorHandler");
module.exports.ErrorHandler = require("./ErrorHandler");
module.exports.enabled = [
    require("./LaunchRequestHandler"),
    require("./TemperatureTellerHandler"),
    require("./HelpIntentHandler"),
    require("./CancelAndStopHandler"),
    require("./FallbackHandler"),
    require("./SessionEndedRequestHandler"),
    require("./IntentReflectorHandler"),
    require("./ErrorHandler"),
];
