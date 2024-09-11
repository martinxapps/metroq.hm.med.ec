import m from "mithril";

const ApiService = {
    baseUrl: "http://localhost:5118/api", // Localhost
   //baseUrl: "https://metropluscsharp.hospitalmetropolitano.org/api", // Producción

  getPhysicalTherapySessions(attentionId) {
    return m.request({
      method: "GET",
      url: `${this.baseUrl}/PhysicalTherapySession/${attentionId}`,
    });
  },

  postHritpreConsInsertRequest(requestData) {
    return m.request({
      method: "POST",
      url: `${this.baseUrl}/HritpreConsInsertRequest`,
      body: requestData,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  getJustificationForNoAdministered(){
    return m.request({
      method: "GET",
      url: `${this.baseUrl}/JustificationForNoAdministered`,
    });
  }
};

export default ApiService;
