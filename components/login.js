// components/login

const scopes = "user-read-private user-read-email user-library-read";
const client_id = process.env.CLIENT_ID;
const redirect_uri = process.env.REDIRECT_URL;

const url =
    'https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + client_id +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent(redirect_uri);

const Login = () => {
    return (
        <div>
            <button onClick={() => window.location = url}>
                LOGIN WITH SPOTIFY
            </button>
        </div>
    );
};

module.exports = Login;
