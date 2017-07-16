jq --raw-output '(.blueprints | map_values(.favorites | length)) as $b | (.blueprintSummaries | map_values(.numberOfFavorites)) as $bs | $b | to_entries | map({key: .key, value: {blueprints: .value, summaries: $bs[.key]}}) | map(select(.value.blueprints != .value.summaries)) | map("http://localhost:3000/view/" + .key) | .[]' < factorio-blueprints-export.json