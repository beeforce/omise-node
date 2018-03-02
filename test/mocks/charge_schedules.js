var nock = require('nock');
nock('https://api.omise.co')
  .persist()
  .get('/charges/schedules')
  .reply(200, {
    "object": "list",
    "from": "1970-01-01T00:00:00Z",
    "to": "2018-03-02T06:59:19Z",
    "offset": 0,
    "limit": 20,
    "total": 17,
    "order": "chronological",
    "location": "/charges/schedules",
    "data": [
      {
        "object": "schedule",
        "id": "schd_test_5aikygh29nc6u68xuib",
        "livemode": false,
        "location": "/schedules/schd_test_5aikygh29nc6u68xuib",
        "status": "active",
        "every": 1,
        "period": "month",
        "on": {
          "days_of_month": [
            1
          ]
        },
        "in_words": "Every 1 month(s) on the 1st",
        "start_date": "2018-01-04",
        "end_date": "2019-01-04",
        "charge": {
          "amount": 200000,
          "currency": "thb",
          "description": "schedule charge id:1",
          "customer": "cust_test_5a4j05pd5uuk0y6y6ls",
          "card": "card_test_5a4j05gs3evyhnywwg8"
        },
        "occurrences": {
          "object": "list",
          "from": "1970-01-01T00:00:00Z",
          "to": "2018-03-02T06:59:19Z",
          "offset": 0,
          "limit": 20,
          "total": 3,
          "order": null,
          "location": "/schedules/schd_test_5aikygh29nc6u68xuib/occurrences",
          "data": [
            {
              "object": "occurrence",
              "id": "occu_test_5aikygh5c4qhpulod8v",
              "livemode": false,
              "location": "/occurrences/occu_test_5aikygh5c4qhpulod8v",
              "schedule": "schd_test_5aikygh29nc6u68xuib",
              "schedule_date": "2018-02-01",
              "retry_date": null,
              "processed_at": "2018-02-01T01:31:53Z",
              "status": "successful",
              "message": null,
              "result": "chrg_test_5ath86asi8q61o7ip6u",
              "created": "2018-01-04T04:55:30Z"
            },
            {
              "object": "occurrence",
              "id": "occu_test_5ath86lxrk25kg5686x",
              "livemode": false,
              "location": "/occurrences/occu_test_5ath86lxrk25kg5686x",
              "schedule": "schd_test_5aikygh29nc6u68xuib",
              "schedule_date": "2018-03-01",
              "retry_date": null,
              "processed_at": "2018-03-01T01:35:51Z",
              "status": "failed",
              "message": "charge could not be captured",
              "result": "chrg_test_5b4fize4x5ee79adawo",
              "created": "2018-02-01T01:31:53Z"
            },
            {
              "object": "occurrence",
              "id": "occu_test_5b4fizhatex2i3g2wyb",
              "livemode": false,
              "location": "/occurrences/occu_test_5b4fizhatex2i3g2wyb",
              "schedule": "schd_test_5aikygh29nc6u68xuib",
              "schedule_date": "2018-03-01",
              "retry_date": "2018-03-02",
              "processed_at": "2018-03-02T01:39:55Z",
              "status": "failed",
              "message": "charge could not be captured",
              "result": "chrg_test_5b4tnbjlgzqajw79r8y",
              "created": "2018-03-01T01:35:51Z"
            }
          ]
        },
        "next_occurrence_dates": [
          "2018-03-01",
          "2018-04-01",
          "2018-05-01",
          "2018-06-01",
          "2018-07-01",
          "2018-08-01",
          "2018-09-01",
          "2018-10-01",
          "2018-11-01",
          "2018-12-01",
          "2019-01-01"
        ],
        "created": "2018-01-04T04:55:30Z"
      },
      {
        "object": "schedule",
        "id": "schd_test_5aikygide4lb4iju4ns",
        "livemode": false,
        "location": "/schedules/schd_test_5aikygide4lb4iju4ns",
        "status": "active",
        "every": 1,
        "period": "month",
        "on": {
          "days_of_month": [
            1
          ]
        },
        "in_words": "Every 1 month(s) on the 1st",
        "start_date": "2018-01-04",
        "end_date": "2019-01-04",
        "charge": {
          "amount": 200000,
          "currency": "thb",
          "description": "schedule charge id:1",
          "customer": "cust_test_5a4j05pd5uuk0y6y6ls",
          "card": "card_test_5a4j05gs3evyhnywwg8"
        },
        "occurrences": {
          "object": "list",
          "from": "1970-01-01T00:00:00Z",
          "to": "2018-03-02T06:59:19Z",
          "offset": 0,
          "limit": 20,
          "total": 3,
          "order": null,
          "location": "/schedules/schd_test_5aikygide4lb4iju4ns/occurrences",
          "data": [
            {
              "object": "occurrence",
              "id": "occu_test_5aikygieziqqw6tirw3",
              "livemode": false,
              "location": "/occurrences/occu_test_5aikygieziqqw6tirw3",
              "schedule": "schd_test_5aikygide4lb4iju4ns",
              "schedule_date": "2018-02-01",
              "retry_date": null,
              "processed_at": "2018-02-01T01:31:53Z",
              "status": "successful",
              "message": null,
              "result": "chrg_test_5ath86b1hnbp8c3thpo",
              "created": "2018-01-04T04:55:30Z"
            },
            {
              "object": "occurrence",
              "id": "occu_test_5ath86nt3e66jvba5i2",
              "livemode": false,
              "location": "/occurrences/occu_test_5ath86nt3e66jvba5i2",
              "schedule": "schd_test_5aikygide4lb4iju4ns",
              "schedule_date": "2018-03-01",
              "retry_date": null,
              "processed_at": "2018-03-01T01:35:51Z",
              "status": "failed",
              "message": "charge could not be captured",
              "result": "chrg_test_5b4fizdvmm57lwa0v1q",
              "created": "2018-02-01T01:31:53Z"
            },
            {
              "object": "occurrence",
              "id": "occu_test_5b4fizg0ls02q97saog",
              "livemode": false,
              "location": "/occurrences/occu_test_5b4fizg0ls02q97saog",
              "schedule": "schd_test_5aikygide4lb4iju4ns",
              "schedule_date": "2018-03-01",
              "retry_date": "2018-03-02",
              "processed_at": "2018-03-02T01:39:55Z",
              "status": "failed",
              "message": "charge could not be captured",
              "result": "chrg_test_5b4tnbjb0qlv4kv8n4z",
              "created": "2018-03-01T01:35:51Z"
            }
          ]
        },
        "next_occurrence_dates": [
          "2018-03-01",
          "2018-04-01",
          "2018-05-01",
          "2018-06-01",
          "2018-07-01",
          "2018-08-01",
          "2018-09-01",
          "2018-10-01",
          "2018-11-01",
          "2018-12-01",
          "2019-01-01"
        ],
        "created": "2018-01-04T04:55:30Z"
      }
    ]
  }, {
    'server': 'nginx/1.1',
    'content-type': 'application/json',
  });
