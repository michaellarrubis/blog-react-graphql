export const routes = {
  home                : '/',
  login               : '/login',
  register            : '/register',
  article             : '/articles/:id',
  articleCreate       : '/article/create',
  articleEdit         : '/article/:id/edit'
}

export const route = (r, data) => {
  let paths = r.split('/');

  paths.forEach((path, i) => {
    if (path.charAt(0) === ':') {
      paths[i] = data[path.replace(':', '')];
    }
  });

  return paths.join('/');
}
