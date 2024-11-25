export const samplePythonCode = `
import os
from elasticsearch import Elasticsearch

client = Elasticsearch(
    hosts=["https://hot-club-of-nutrition-df2e43.es.us-east-1.aws.elastic.cloud:443"],
    api_key=os.getenv("ELASTIC_API_KEY"),
)

resp = client.index(
    index="my-index",
    document={
        "id": "park_rocky-mountain",
        "title": "Rocky Mountain",
        "description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra."
    },
)
print(resp)
`