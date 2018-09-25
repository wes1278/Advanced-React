const Query = {
  dogs(parent, args, ctx, info) {
    return [{ name: 'Snickers' }, { name: 'Lucky' }];
  },

};

module.exports = Query;
