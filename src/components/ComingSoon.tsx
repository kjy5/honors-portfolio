import '../styles/ComingSoon.sass'

/**
 * Creates a React component that displays a "Coming Soon" message.
 * @constructor
 * @returns {JSX.Element}
 */
export default function (): JSX.Element {
  return (
    <div className={'coming-soon'}>
      <h1>👋 Hello!</h1>
      <h2>Welcome and thanks for visiting my honors portfolio website!</h2>
      <p>The website is currently being updated. Feel free to scroll around and
        see the current progress, or come
        back later when it&apos;s all done!</p>
    </div>
  )
}