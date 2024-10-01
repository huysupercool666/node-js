const StatusCode = Object.freeze({
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHODS_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
});

const method = Object.freeze({
  get: "GET",
  post: "POST",
  patch: "PATCH",
  delete: "DELETE",
});

const taskUrl = Object.freeze({
  getTasks: "/tasks",
  createTask: "/tasks/:id",
  deleteTask: "/tasks/:id",
  updateTask: "/tasks/:id",
});

module.exports = {
  StatusCode,
  method,
  taskUrl,
};
