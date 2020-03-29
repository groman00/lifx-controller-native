/**
 * https://github.com/klarstil/lifx-http-api
 */
import { LIFX_BEARER_TOKEN } from '../secrets'; 

class Client {
  constructor () {
    this.settings = {
      version: 'v1',
      url: 'https://api.lifx.com/',
      bearerToken: LIFX_BEARER_TOKEN,
    };
    return this;    
  }

  /**
   * Returns the bearer token which is used to authenticate against the api.
   * @returns {null|string}
   */
  getBearerToken = () => {
    return this.settings.bearerToken;
  };  

  /**
   * Returns the full api url
   * @returns {string}
   */
  getApiUrl = () => {
    return `${this.settings.url}${this.settings.version}`;
  };

  /**
   * Sends the actual request to the lifx api end point.
   *
   * @param {object} settings
   */
  send = (settings = {}) => {
    console.log(Object.assign({}, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getBearerToken()}`,
        'Content-Type': 'application/json',
      },
    }, settings));
    return fetch(`${this.getApiUrl()}/${settings.url}`, Object.assign({}, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.getBearerToken()}`,
        'Content-Type': 'application/json',
      },
    }, settings));
  }

  /**
   * Lists all lights or specific lights depending on the selector.
   *
   * @param {string} selector
   * @returns {Promise} promise
   */
  listLights = (selector = 'all') => {    
    return new Promise((resolve, reject) => {
      this
        .send({ url: 'lights/' + selector })
          .then(response => response.json())
          .then(resolve)
          .catch(reject);
        });
  }

  /**
   * Sets a sets to all or a specific light.
   *
   * @param {string} selector
   * @param {object} settings
   * @returns {*} either the promise or nothing
   */
  setState = (selector, settings) => {
    return new Promise((resolve, reject) => {
      this
        .send({ 
          url: 'lights/' + selector + '/state',
          body: JSON.stringify(settings),          
          method: 'PUT'        
        })
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
    });    
  };  
}

// export default (new Client());
module.exports = (new Client());