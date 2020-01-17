const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `${siteConfig.repoUrl}/edit/master/www/website/siteConfig.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink} target="_blank">
        <img src={user.image} alt={user.caption} title={user.caption} />
        <p>{user.caption}</p>
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using This?</h1>
              <p>This project is used by many packages</p>
            </div>
            <div className="logos">{showcase}</div>
            <p>Are you using this project?</p>
            <a href={editUrl} className="button" target="_blank">
              Add your company
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Users;