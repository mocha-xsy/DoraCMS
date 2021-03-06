/*!
 * redis client
 */
'use strict';
var redis = require('redis');
var settings = require('@configs/settings');

var client = redis.createClient(settings.redis_port, settings.redis_host);
client.auth(settings.redis_psd);
module.exports = client;