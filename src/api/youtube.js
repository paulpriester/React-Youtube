import axios from 'axios'

const KEY = 'AIzaSyC0ok6Hi4PQTcbpguNLj1qcdb4I204mOZ8'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
})