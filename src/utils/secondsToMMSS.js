import moment from "moment/moment"

export default (seconds) => {
	return moment.utc(seconds * 1000).format('mm:ss')
}