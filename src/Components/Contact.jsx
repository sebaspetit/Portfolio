export function Contact() {
    return (
        <div id="contact" className="contact even">
            <strong><h3>Contact</h3></strong>
            <hr />
            <form action="https://formspree.io/f/mwkznjap" method="POST">
                <label>
                    Your Email:
                    <input type="email" name="_replyto" />
                </label>
                <label>
                    Your message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
                <nav id="social-media">
                    <a target='_blank' aria-label="Instagram" href='https://www.instagram.com/sebastianpetit_/'><img className='instagram' width="100" src="src\assets\Social\instagram.png" /> </a>

                    <a target='_blank' aria-label="linkedin" href='https://www.linkedin.com/in/sebastian-petit-37b967201/'><img className='linkedin' width="100" src="src\assets\Social\linkedin.png" /></a>
                </nav>
            </form>
            <footer>
                <small>Developed and designed by Sebastian Petit 2023</small>
            </footer>

        </div>

    )
}