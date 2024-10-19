import React from 'react'

const CollaboratorsCarosoule = () => {

    const row1 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
      ];
    
      const row2 = [
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
        "https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
      ];
  return (
    <div className='wrapper'>
        <h2 className="Text">With Great Outcomes</h2>
        <p className='Note'>Our Collaborator with great oppourtunity</p>
        <div className='marquee'>
            <div className="MarqueeGroup">
                {row1.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
            <div className="MarqueeGroup">
                {row1.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
        </div>
        <div className='marquee'>
            <div className="MarqueeGroup2">
                {row2.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
            <div className="MarqueeGroup2">
                {row2.map(el=> (
                    <div className="ImageGroup">
                        <img src={el} alt='image' className='Image' />
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}

export default CollaboratorsCarosoule