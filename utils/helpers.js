
import { expect } from "@playwright/test";

export class ApiHelper{
    constructor(page){
      this.page = page;
    }
    async interceptApiRequest(endpoint,method = "GET"){
      return await this.page.waitForResponse(
          response =>
              response.url().includes(endpoint) &&
              response.request().method() === method
      );
    }

    /**
    * Status Code Validation
    */
    async verifyStatusCode(response,expectedStatus = 200) {
        expect(response.status()).toBe(expectedStatus);
    }

        /**
     * GET Request
     */
    async interceptGetRequest(endpoint) {
        return await this.interceptApiRequest(endpoint,"GET");
    }

    /**
     * POST Request
     */
    async interceptPostRequest(endpoint) {
        return await this.interceptApiRequest(endpoint,"POST");
    }

    /**
     * PUT Request
     */
    async interceptPutRequest(endpoint) {
        return await this.interceptApiRequest(endpoint,"PUT");
    }

    /**
     * PATCH Request
     */
    async interceptPatchRequest(endpoint) {
        return await this.interceptApiRequest(endpoint,"PATCH");
    }

    /**
     * DELETE Request
     */
    async interceptDeleteRequest(endpoint) {
        return await this.interceptApiRequest(endpoint,"DELETE");
    }

    /**
     * Common Response Validation
     */
    async verifySuccessResponse(response) {
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    }

    /**
     * 201 Created
     */
    async verifyCreatedResponse(response) {
        expect(response.status()).toBe(201);
    }

    /**
     * 400 Bad Request
     */
    async verifyBadRequest(response) {
        expect(response.status()).toBe(400);
    }

    /**
     * 401 Unauthorized
     */
    async verifyUnauthorized(response) {
        expect(response.status()).toBe(401);
    }

    /**
     * 403 Forbidden
     */
    async verifyForbidden(response) {
        expect(response.status()).toBe(403);
    }

    /**
     * 404 Not Found
     */
    async verifyNotFound(response) {
        expect(response.status()).toBe(404);
    }

    /**
     * 500 Server Error
     */
    async verifyServerError(response) {
        expect(response.status()).toBe(500);
    }

  /**
   * Verify Response Body Property
   */
    async verifyResponseProperty(response,propertyName,expectedValue = null) {

        const body = await response.json();

        // Property exists কিনা check
        expect(body).toHaveProperty(propertyName);

        // Expected value দিলে value-ও check করবে
        if (expectedValue !== null) {
            expect(body[propertyName]).toBe(expectedValue);
        }
        return body;
    }

}

