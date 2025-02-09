class Form extends Component {
    render() {
        return (
            <form class='row g-3 mt-3 ms-2'>
                <div class='col-auto'>
                    <label for='staticEmail2' class='visually-hidden'>Email</label>
                    <input type='text' class='form-control' placeholder='email@example.com' />
                </div>
                <div class='col-auto'>
                    <label for='inputPassword2' class='visually-hidden'>
                        Password
                    </label>
                    <input type='password' class='form-control' placeholder='Password' />
                </div>
                <div class='col-auto'>
                    <button type='submit' class='btn btn-primary mb3'>
                        Login
                    </button>
                </div>
            </form>
        );
    }
}
export default Form;