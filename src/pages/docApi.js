const React = require('react')
import { RedocStandalone } from 'redoc'

class docApi extends React.Component {
  render() {
    return (
      <div>
        <RedocStandalone
          specUrl='otomi-api.json'
          options={{
            nativeScrollbars: true,
            showExtensions: false,
            hideSchemaTitles: true,
            hideDownloadButton: true,
            theme: { colors: { main: '#dd5522' } },
          }}
        />
      </div>
    )
  }
}

export default docApi
