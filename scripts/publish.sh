#!/bin/bash
set -e

# 带时间的日志输出
log() {
  echo -e "\033[31m [$(date '+%Y-%m-%d %H:%M:%S')] $1 \033[0m"
}

version=$1

log "cur version: $version"

log "code review"
yarn lint

log "build code"
yarn build

log "write version"
npm version $version --message "$version"

git tag -d "v${version}"

log "changelog"
yarn changelog
git add .
git commit -m "chore: $version changelog"

git tag "v${version}"

log "publishing"
npm publish --tag $tag
git push
git push origin v$version