#!/usr/bin/env bash

docker run \
  --rm \
  -it \
  --name programners-data \
  -v "$(pwd)"/:/app:cached \
  metocherry/centos7-node \
  /bin/bash

