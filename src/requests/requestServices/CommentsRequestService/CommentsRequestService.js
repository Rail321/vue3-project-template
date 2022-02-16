import mainRequestAxios from '../../requestAxioses/mainRequestAxios'

class CommentsRequestService {

  static get(options) {
    return mainRequestAxios.get('/comments', options)
  }

}

export default CommentsRequestService