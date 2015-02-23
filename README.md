omise-node
=========

Omise Node.js client

**Installation**
```
$npm install omise-node
```

**Usage**

 - Configure
```
var config = {
  'publicKey': '<Public key>',
  'secretKey': '<Secret key>'
};

var omise = require('omise-node')(config);
```

 - Create token

```
var card_details = {
  'card[name]': 'JOHN DOE',
  'card[city]': 'Bangkok',
  'card[postal_code]': 10320,
  'card[number]': '4242424242424242',
  'card[expiration_month]': 2,
  'card[expiration_year]': 2017
};

omise.tokens.create(card_details, function(err, resp){
  var token_id = resp.card.id;
  console.log(token_id);
});
```

- Add a customer with a card via a token

```
  var customer = {
    email: "john.doe@example.com",
    description: "John Doe (id: 30)",
    card: <token_id>
  };
  omise.customers.create(customer, function(err, resp) {});
```

- Add a new customer

```
var customer = {
  email: "john.doe@example.com",
  description: "John Doe (id: 30)",
};
omise.customers.create(customer, function(err, resp) {});
```

- List all customers

```
omise.customers.list(function{err, resp} {});
```

- Retrieve a customer

```
omise.customers.retrieve(customerId, function{err, resp} {});
```


- Updating a Customer

```
omise.customers.update(customerId, {
  description: "Customer for john.doe@example.com"
}, function(err, customer) {
});
```

**Testing**
```
$export OMISE_PUBLIC_KEY=<test public key>
$export OMISE_SECRET_KEY=<test secret key>
$cd omise-node;
$mocha test #for local test
$NOCK_OFF=true mocha test #for remote test

```

**Code Style**
You could use git pre-commit hook to check.
Just run `ln -s ../../pre-commit.sh .git/hooks/pre-commit`

**Contribute**

If you want to add a new resource, just creating new resource file in `lib/<resource>.js` and add a content like following:

```
var resource = require('../apiResources');
var <resource> = function(config) {
  return resource.resourceActions('<resource>',
    [<array of actions>], {'key': config['<key to use>']}
  );
}
module.exports = <resource>;
```
and append omiseResources in lib/apiResources.js with a new resourceName('<resource>')

Note:
Support actions: `['create', 'list', 'retrieve', 'destroy', 'update']`
And don't for to add a test, to do so, setup mocking at `test/mocks/<resource>_<action>.js` and create relevant test in test/ directory.