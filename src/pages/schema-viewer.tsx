const React = require('react')
import schema from './values-schema.json'
import { JsonSchemaViewer } from '@stoplight/json-schema-viewer'

export default function () {
  return (
    <JsonSchemaViewer
      name='Otomi Values'
      schema={schema}
      expanded={true}
      hideTopBar={false}
      emptyText='No schema defined'
      defaultExpandedDepth={0}
    />
  )
}
