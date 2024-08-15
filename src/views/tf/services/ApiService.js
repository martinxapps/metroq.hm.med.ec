import m from "mithril";

const ApiService = {
  baseUrl: "http://localhost:5118/api", // Localhost

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
};

export default ApiService;
