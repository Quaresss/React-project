(self.webpackChunkreact_project = self.webpackChunkreact_project || []).push([
  [541],
  {
    87: (t, e, n) => {
      n.d(e, { A: () => r });
      var e = n(601),
        e = n.n(e),
        a = n(314),
        n = n.n(a)()(e());
      n.push([
        t.id,
        '._mCrEgQK9mg4tgLVFiET{font-family:"Proxima Nova",Roboto,system-ui,Tahoma,sans-serif;display:flex;justify-content:center;align-items:center;height:50vh}.O2NCX3pelTmVHMEJzuh5{color:#fff;max-width:400px;width:100%;text-align:center;display:flex;flex-direction:column}.O2NCX3pelTmVHMEJzuh5 p{margin-bottom:30px;cursor:pointer}.O2NCX3pelTmVHMEJzuh5 h2{margin-bottom:40px}.O2NCX3pelTmVHMEJzuh5 input{width:100%;height:40px;margin-bottom:20px}.O2NCX3pelTmVHMEJzuh5 button{margin-bottom:30px;padding:10px 0}.O2NCX3pelTmVHMEJzuh5 div{margin-bottom:30px;padding:10px 0}',
        ''
      ]),
        (n.locals = {
          root: '_mCrEgQK9mg4tgLVFiET',
          form: 'O2NCX3pelTmVHMEJzuh5'
        });
      let r = n;
    },
    541: (t, e, n) => {
      n.r(e), n.d(e, { default: () => b });
      var o = n(848),
        i = n(540),
        e = n(72),
        e = n.n(e),
        a = n(825),
        a = n.n(a),
        r = n(659),
        r = n.n(r),
        l = n(56),
        l = n.n(l),
        s = n(159),
        s = n.n(s),
        p = n(113),
        p = n.n(p),
        m = n(87),
        u = {};
      (u.styleTagTransform = p()),
        (u.setAttributes = l()),
        (u.insert = r().bind(null, 'head')),
        (u.domAPI = a()),
        (u.insertStyleElement = s()),
        e()(m.A, u);
      let c = m.A && m.A.locals ? m.A.locals : void 0;
      var h = n(83),
        d = n(767),
        f = n(468),
        g = n(22),
        x = function () {
          return (x =
            Object.assign ||
            function (t) {
              for (var e, n = 1, a = arguments.length; n < a; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        };
      let b = function () {
        var e = (0, d.Zp)(),
          t = i.useState({ email: '', password: '' }),
          n = t[0],
          a = t[1],
          r = (0, f.wA)();
        return (0, o.jsx)('div', {
          className: c.root,
          children: (0, o.jsxs)('form', {
            className: c.form,
            onSubmit: function (t) {
              t.preventDefault(),
                h.A.post('https://847c80a9e47a2b52.mokky.dev/auth', n)
                  .then(function () {
                    alert('Успех'), e('/'), r((0, g.N)());
                  })
                  .catch(function () {
                    alert('Ошибка');
                  });
            },
            children: [
              (0, o.jsx)('h2', { children: 'Вход' }),
              (0, o.jsx)('input', {
                type: 'email',
                placeholder: 'Введите Email',
                onChange: function (t) {
                  return a(x(x({}, n), { email: t.target.value }));
                }
              }),
              (0, o.jsx)('input', {
                type: 'password',
                placeholder: 'Введите пароль',
                onChange: function (t) {
                  return a(x(x({}, n), { password: t.target.value }));
                }
              }),
              (0, o.jsx)('button', {
                className: 'button pay-btn',
                type: 'submit',
                children: 'Войти'
              })
            ]
          })
        });
      };
    }
  }
]);
