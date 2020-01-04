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

const Alexa = require('ask-sdk-core');
const intents = require("./app/intents/IntentHandlers");
const i18n = require("./app/i18n/LocalisationRequestInterceptor");

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        intents.LaunchRequestHandler,
        intents.TemperatureTellerHandler,
        intents.HelpIntentHandler,
        intents.CancelAndStopHandler,
        intents.FallbackHandler,
        intents.SessionEndedRequestHandler,
        intents.IntentReflectorHandler)
    .addErrorHandlers(intents.ErrorHandler)
    .addRequestInterceptors(i18n.LocalisationRequestInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
