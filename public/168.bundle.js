(self.webpackChunkreact_project = self.webpackChunkreact_project || []).push([
  [168],
  {
    168: (t, e, n) => {
      n.r(e), n.d(e, { default: () => s });
      var l = n(540),
        a = n(848),
        i = n(976),
        d = n(468),
        h = n(722);
      function r(t) {
        var e = t.id,
          n = t.img,
          s = t.title,
          i = t.price,
          r = t.type,
          c = t.count,
          o = (0, d.wA)(),
          t = l.useMemo(
            function () {
              return i * c;
            },
            [i, c]
          );
        return (0, a.jsx)('div', {
          className: 'content__items',
          children: (0, a.jsxs)('div', {
            className: 'cart__item',
            children: [
              (0, a.jsx)('div', {
                className: 'cart__item-img',
                children: (0, a.jsx)('img', {
                  loading: 'lazy',
                  className: 'item-block__image',
                  src: n,
                  alt: 'item'
                })
              }),
              (0, a.jsxs)('div', {
                className: 'cart__item-info',
                children: [
                  (0, a.jsx)('h3', { children: s }),
                  (0, a.jsx)('p', { children: r })
                ]
              }),
              (0, a.jsxs)('div', {
                className: 'cart__item-count',
                children: [
                  (0, a.jsx)('div', {
                    onClick: function () {
                      1 < c && o((0, h.G8)(e));
                    },
                    className:
                      'button button--outline button--circle cart__item-count-minus '.concat(
                        1 === c ? 'button_disabled' : ''
                      ),
                    children: (0, a.jsxs)('svg', {
                      width: '10',
                      height: '10',
                      viewBox: '0 0 10 10',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        (0, a.jsx)('path', {
                          d: 'M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z',
                          fill: '#EB5A1E'
                        }),
                        (0, a.jsx)('path', {
                          d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                          fill: '#EB5A1E'
                        })
                      ]
                    })
                  }),
                  (0, a.jsx)('b', { children: c }),
                  (0, a.jsx)('div', {
                    onClick: function () {
                      o((0, h.B5)({ id: e }));
                    },
                    className:
                      'button button--outline button--circle cart__item-count-plus',
                    children: (0, a.jsxs)('svg', {
                      width: '10',
                      height: '10',
                      viewBox: '0 0 10 10',
                      fill: 'none',
                      xmlns: 'http://www.w3.org/2000/svg',
                      children: [
                        (0, a.jsx)('path', {
                          d: 'M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z',
                          fill: '#EB5A1E'
                        }),
                        (0, a.jsx)('path', {
                          d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                          fill: '#EB5A1E'
                        })
                      ]
                    })
                  })
                ]
              }),
              (0, a.jsx)('div', {
                className: 'cart__item-price',
                children: (0, a.jsxs)('b', { children: [t, ' ₽'] })
              }),
              (0, a.jsx)('div', {
                onClick: function () {
                  window.confirm(
                    'Вы уверены, что хотитие удалить данный товар?'
                  ) && o((0, h.Ai)(e));
                },
                className: 'cart__item-remove',
                children: (0, a.jsx)('div', {
                  className: 'button button--outline button--circle',
                  children: (0, a.jsxs)('svg', {
                    width: '10',
                    height: '10',
                    viewBox: '0 0 10 10',
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    children: [
                      (0, a.jsx)('path', {
                        d: 'M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z',
                        fill: '#EB5A1E'
                      }),
                      (0, a.jsx)('path', {
                        d: 'M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z',
                        fill: '#EB5A1E'
                      })
                    ]
                  })
                })
              })
            ]
          })
        });
      }
      function c() {
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)('div', {
            className: 'cart cart--empty',
            children: [
              (0, a.jsx)('h2', { children: 'Корзина пустая' }),
              (0, a.jsxs)('p', {
                children: [
                  'Вероятней всего, вы не выбрали нужный товар.',
                  (0, a.jsx)('br', {}),
                  'Для того, чтобы заказать товар, перейди на главную страницу.'
                ]
              }),
              (0, a.jsx)('img', {}),
              (0, a.jsx)(i.N_, {
                to: '/',
                className: 'button button--black',
                children: (0, a.jsx)('span', { children: 'Вернуться назад' })
              })
            ]
          })
        });
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, s = arguments.length; n < s; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      let s = function () {
        var t = (0, d.d4)(function (t) {
            return t.cart;
          }),
          e = t.totalPrice,
          t = t.items,
          n = t.reduce(function (t, e) {
            return t + e.count;
          }, 0),
          s = (0, d.wA)();
        return e
          ? (0, a.jsx)('div', {
              className: 'container',
              children: (0, a.jsx)('div', {
                className: 'content',
                children: (0, a.jsx)('div', {
                  className: 'container container--cart',
                  children: (0, a.jsxs)('div', {
                    className: 'cart',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'cart__top',
                        children: [
                          (0, a.jsxs)('h2', {
                            className: 'content__title',
                            children: [
                              (0, a.jsxs)('svg', {
                                width: '18',
                                height: '18',
                                viewBox: '0 0 18 18',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  (0, a.jsx)('path', {
                                    d: 'M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z',
                                    stroke: 'white',
                                    strokeWidth: '1.8',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  }),
                                  (0, a.jsx)('path', {
                                    d: 'M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z',
                                    stroke: 'white',
                                    strokeWidth: '1.8',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  }),
                                  (0, a.jsx)('path', {
                                    d: 'M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669',
                                    stroke: 'white',
                                    strokeWidth: '1.8',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  })
                                ]
                              }),
                              'Корзина'
                            ]
                          }),
                          (0, a.jsxs)('div', {
                            onClick: function () {
                              window.confirm(
                                'Вы уверены, что хотитие удалить все товары?'
                              ) && s((0, h.N2)());
                            },
                            className: 'cart__clear',
                            children: [
                              (0, a.jsxs)('svg', {
                                width: '20',
                                height: '20',
                                viewBox: '0 0 20 20',
                                fill: 'none',
                                xmlns: 'http://www.w3.org/2000/svg',
                                children: [
                                  (0, a.jsx)('path', {
                                    d: 'M2.5 5H4.16667H17.5',
                                    stroke: '#B6B6B6',
                                    strokeWidth: '1.2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  }),
                                  (0, a.jsx)('path', {
                                    d: 'M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z',
                                    stroke: '#B6B6B6',
                                    strokeWidth: '1.2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  }),
                                  (0, a.jsx)('path', {
                                    d: 'M8.33337 9.16667V14.1667',
                                    stroke: '#B6B6B6',
                                    strokeWidth: '1.2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  }),
                                  (0, a.jsx)('path', {
                                    d: 'M11.6666 9.16667V14.1667',
                                    stroke: '#B6B6B6',
                                    strokeWidth: '1.2',
                                    strokeLinecap: 'round',
                                    strokeLinejoin: 'round'
                                  })
                                ]
                              }),
                              (0, a.jsx)('span', {
                                children: 'Очистить корзину'
                              })
                            ]
                          })
                        ]
                      }),
                      t.map(function (t) {
                        return (0, l.createElement)(r, o({}, t, { key: t.id }));
                      }),
                      (0, a.jsxs)('div', {
                        className: 'cart__bottom',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'cart__bottom-details',
                            children: [
                              (0, a.jsxs)('span', {
                                children: [
                                  ' ',
                                  'Всего товаров: ',
                                  (0, a.jsxs)('b', { children: [n, ' шт.'] }),
                                  ' '
                                ]
                              }),
                              (0, a.jsxs)('span', {
                                children: [
                                  ' ',
                                  'Сумма заказа: ',
                                  (0, a.jsxs)('b', { children: [e, ' ₽'] }),
                                  ' '
                                ]
                              })
                            ]
                          }),
                          (0, a.jsxs)('div', {
                            className: 'cart__bottom-buttons',
                            children: [
                              (0, a.jsxs)(i.N_, {
                                to: '/',
                                className:
                                  'button button--outline button--add go-back-btn',
                                children: [
                                  (0, a.jsx)('svg', {
                                    width: '8',
                                    height: '14',
                                    viewBox: '0 0 8 14',
                                    fill: 'none',
                                    xmlns: 'http://www.w3.org/2000/svg',
                                    children: (0, a.jsx)('path', {
                                      d: 'M7 13L1 6.93015L6.86175 1',
                                      stroke: '#D3D3D3',
                                      strokeWidth: '1.5',
                                      strokeLinecap: 'round',
                                      strokeLinejoin: 'round'
                                    })
                                  }),
                                  (0, a.jsx)('span', {
                                    children: 'Вернуться назад'
                                  })
                                ]
                              }),
                              (0, a.jsx)(i.N_, {
                                to: '/confirm',
                                children: (0, a.jsx)('div', {
                                  className: 'button pay-btn',
                                  children: (0, a.jsx)('span', {
                                    onClick: function () {
                                      s((0, h.N2)());
                                    },
                                    children: 'Оплатить сейчас'
                                  })
                                })
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                })
              })
            })
          : (0, a.jsx)(c, {});
      };
    }
  }
]);
