import { Link } from 'react-router-dom'
import { useStore } from '../../../../lib/store/useStore'

export default function Conclusion() {
  const { player } = useStore()

  return (
    <section className="cont-boxed flex-col gap-6 page-section" id="conclusion-page">
      <div className='flex-col-center gap-4'>
        <img src={`${import.meta.env.BASE_URL}images/character/${player.character?.image ?? 'character2'}.jpg`} alt="character" />

        <p className='h4-b'>Welcome back home {player.character?.name}!</p>

        <div className='flex-col gap-2'>
          <p className='text-center'>Your journey ends here, but for thousands of students, this is only the beginning of everyday reality. Through your choices, you have glimpsed this precarious balance where every decision, from a simple shopping basket to an evening with friends, weighs on your well-being and your future.</p>
          <p className='text-center'>Every student charts a different path, made up of compromises and priorities. Whether your journey has been smooth or fraught with pitfalls, this experience highlights above all the importance of finding your own balance in this new environment. Beyond grades and classes, this is where your independence truly begins. We wish you all the best in your future studies.</p>
        </div>
      </div>

      <div className='cards flex flex-center gap-5'>
        <div className='flex gap-3'>
          <div className='flex-col gap-2'>
            <h4 className='h4-b'>About the budget</h4>
            <p>To stretch your budget further, consider opting for budget-friendly brands or sticking strictly to the essentials-every little bit helps when funds are limited. However, if you feel you have some breathing room, treat yourself occasionally; it's all about finding that right balance without overdoing it.</p>
          </div>

          <div className='flex-col gap-2'>
            <h4 className='h4-b'>About the mental health</h4>
            <p>The academic world can be a high-pressure environment, and focusing solely on your studies isn't always the fastest route to success. Taking time to socialize and unwind is essential; a night out can be a much-needed escape to clear your mind and recharge. In the end, finding a healthy balance between your books and your social life is the real key to lasting well-being.</p>
          </div>

          <div className='flex-col gap-2'>
            <h4 className='h4-b'>About the studies</h4>
            <p>Working hard is the best way to succeed, but allow yourself some time off to relax without losing sight of your goal. Taking classes on the side can help you broaden your knowledge and learn things you never heard about in class.</p>
          </div>
        </div>
      </div>

      <div className='flex-center gap-1'>
        <Link to="/game" className='btn-large-secondary'>Start over</Link>
        <Link to="/home" className='btn-large-secondary'>Go back home</Link>
        <Link to="/documentation" className='btn-large'>Documentation and additional videos</Link>
      </div>
    </section>
  )
}