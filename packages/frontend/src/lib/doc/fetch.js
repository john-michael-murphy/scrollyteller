import { drive as Drive } from '@googleapis/drive';
import { GoogleAuth } from 'google-auth-library';

export default async function read(fileId) {
  const auth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/drive'],
    credentials: {
      private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC/jeb94SbTVm8A\n9BD3+3aoKLS0qUJKvTL6MV8CV/71FrzjqUlCkxhVWvJpZ+wnL8ZtJFVzB5uY+TC2\nnzlnosG4zOzaqF20C5t9Hpw1qWqU3BS27wKXBDsEAFzUld52jY6k1z2jnw7husO7\nG7MFbGlCqeVezZBgBsiV8mm0mwJIVBgzYZGQHLnXqiYsa0Pkkao3t0cBKK29X01s\nZwUG28S/wwWZeesbXMKnRe3VF6bl9BVTpVmtYcJYEHf9rf3annWxiqtNb/nluZMW\nDPuu0vVehwTIw4N4wmxgCkuWq8iB4QaroHFa70bHLWLjqbsTaEuFplSzFO+mV5EP\n3OqwvlRzAgMBAAECggEAB4Bgn+ed1B/p5/Em6vczjeFONlb8jB29rdOaI2bbyrBR\nxF6gSlWlWc5eeOdDdcNms2Z9XCxbmRGFKVmx70+N45VO3z9BsCfWNn+o4WcZj+vQ\neduBT/Wv8/epqv+VfzIK+ISfWtWDSS69tImgqKE2vBAYNe657TDG0Sx1nEeHvtpO\n4YX0+HQcm4vgupJl2QcsLijgmxy6mjxEHJ8XlzBvpE+ZmqWFHETsXfn7vsp4n7Sw\nXDp2yhrWtHrw/3nsqA/Cs6Epzwc/9y63rn7UZt+2iw5Af0kTOP27V/X6f1JP2zvb\njnglcreW+vxMzBMWQMgfN40/PC7DIGkrVvGZmReXPQKBgQDhP+c8UK9dDTPgnnDJ\nCPJHc6na5EC/uEDlnvDsIXCT0tzsxTVTuUUTpVMhlenkhS0rsQkKcMIdKTMfKVSV\nTNUHieMHoeWrdpHeKVvQysafMszCGzwA6UugAqM/d3+Kv7yKdiWS0THbGLLDzO1C\nH5EDkCeEXx5AXhEBCdIxca3NBQKBgQDZtGd7QpxjDyOapMIIAcYRFwk02rDMW+la\n/xCiOCftxWzDeKNf/rEH15IrxtzSxMqySLTYbnv0cy0ySRxM4CLTtUJAwIf2g6KC\nLp+fUyeTY3Thntv+o4SHq4Wft44TNjnzn32SGIYKntc1RSFIo2hc43HeMyWvNxb1\nWuHsTCmVFwKBgAQ+ownk71kOjaK2+aMgMwibqmDAmmPCgh6RnzKj8q4mdBlWIgog\n3KdhHy7r10uCIvbG0EfNFitcgmUc70Yc+4q303pqV5yikF8iYmON3q5TU754qunN\ne6pZQmBIzTN9J31oeo7IuGrLjVrZOsNbOu1ZQxVggX5vB10ApWBfJwpNAoGAJArL\n/woeHgBJoraYMP8qLXYk3g0+q/ajgZ8sv86QPbsrsIjuc1wVLvkvh/PaZ0KRVEbZ\nOePAvc27s9GKz+djnK0rlNDLMbLFWswhPR1lNe+HUDserN+hd1ycOL8I1IFrwruq\n7F8HAgceFgGl6wKyqn41QdYx7Pov4Nr1AEvzrm0CgYAW/jsYs48GUwj6zP2BN1Oi\nmSZf3NR78811smxJGv2kOdCjTnS4SENJeBMhWoxvS5t4bHXHq3AXyYDtYf5hVQat\nHZjNHaC5hDCq5DfTJorwwa9eCStdBeqoyvZWmUz98w4SBq9tWZBo9wZIKv5YU5zt\nnyfDQ7ggPsHJwMOPIIvwmA==\n-----END PRIVATE KEY-----\n",
      client_email: "scrollyteller@avid-catalyst-300801.iam.gserviceaccount.com",
    },
  });

  const drive = Drive({ version: 'v3', auth });

  const { data } = await drive.files.export({
    fileId,
    mimeType: 'text/html',
  })

  return data.toString();
}

