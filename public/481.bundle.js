(self.webpackChunkreact_project = self.webpackChunkreact_project || []).push([
  [481],
  {
    820: (t, e, n) => {
      n.d(e, { A: () => l });
      var e = n(601),
        e = n.n(e),
        o = n(314),
        n = n.n(o)()(e());
      n.push([
        t.id,
        '.cp13S1c0CGl7tFoJ4OBS{display:flex;justify-content:center;align-items:center;height:50vh}.GoxglDacoKulXl3Dp3DM{color:#fff;max-width:400px;width:100%;text-align:center;display:flex;flex-direction:column}.GoxglDacoKulXl3Dp3DM p{margin-bottom:30px;cursor:pointer}.GoxglDacoKulXl3Dp3DM h2{margin-bottom:40px}.GoxglDacoKulXl3Dp3DM input{width:100%;height:40px;margin-bottom:20px}.GoxglDacoKulXl3Dp3DM button{margin-bottom:30px;padding:10px 0}.GoxglDacoKulXl3Dp3DM div{margin-bottom:30px;padding:10px 0}',
        ''
      ]),
        (n.locals = {
          root: 'cp13S1c0CGl7tFoJ4OBS',
          form: 'GoxglDacoKulXl3Dp3DM'
        });
      let l = n;
    },
    481: (t, e, n) => {
      n.r(e), n.d(e, { default: () => g });
      var l = n(848),
        a = n(540),
        e = n(72),
        e = n.n(e),
        o = n(825),
        o = n.n(o),
        r = n(659),
        r = n.n(r),
        i = n(56),
        i = n.n(i),
        c = n(159),
        c = n.n(c),
        p = n(113),
        p = n.n(p),
        s = n(820),
        u = {};
      (u.styleTagTransform = p()),
        (u.setAttributes = i()),
        (u.insert = r().bind(null, 'head')),
        (u.domAPI = o()),
        (u.insertStyleElement = c()),
        e()(s.A, u);
      let d = s.A && s.A.locals ? s.A.locals : void 0;
      var h = n(83),
        m = n(767),
        x = function () {
          return (x =
            Object.assign ||
            function (t) {
              for (var e, n = 1, o = arguments.length; n < o; n++)
                for (var l in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
              return t;
            }).apply(this, arguments);
        };
      let g = function () {
        var t = (0, m.Zp)(),
          e = a.useState({ email: '', password: '' }),
          n = e[0],
          o = e[1];
        return (0, l.jsx)('div', {
          className: d.root,
          children: (0, l.jsxs)('form', {
            className: d.form,
            onSubmit: function () {
              h.A.post('https://847c80a9e47a2b52.mokky.dev/register', n)
                .then(function () {
                  alert('Успех'), t('/');
                })
                .catch(function () {
                  alert('Ошибка');
                });
            },
            children: [
              (0, l.jsx)('h2', { children: 'Регистрация' }),
              (0, l.jsx)('input', {
                type: 'email',
                placeholder: 'Введите Email',
                onChange: function (t) {
                  return o(x(x({}, n), { email: t.target.value }));
                }
              }),
              (0, l.jsx)('input', {
                type: 'password',
                placeholder: 'Введите пароль',
                onChange: function (t) {
                  return o(x(x({}, n), { password: t.target.value }));
                }
              }),
              (0, l.jsx)('button', {
                className: 'button button--black',
                type: 'submit',
                children: 'Зарегистрироваться'
              })
            ]
          })
        });
      };
    }
  }
]);
