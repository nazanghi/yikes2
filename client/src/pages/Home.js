export default () => {



    useEffect(() => {
        getOneRandomPost();
    }, [])

    const getOneRandomPost = async () => {
        try {
            let post = await __GetRandomPost();
            setPostId(post.id); 
            setPicUrl(post.picture);
            setTitle(post.title);
            setDescription(post.description);
            setPostUpvotes(post.upvote);
            setPostDownvotes(post.downvote);
        } catch (error) {
            throw error
        }
        return
    }

    const setOpacities = () => {
        setOverlayOpacity('1')
        setPostOpacity('0.2')
        setoverlayZindex('1')
    }

    const resetOpacities = () => {
        setOverlayOpacity('0')
        setPostOpacity('1')
        setoverlayZindex('-1')
    }

    return (
        <div style={{height:'100%', flexGrow:'1'}}>
            <div style={{
                zIndex: `${overlayZIndex}`,
                opacity: `${overlayOpacity}`,
                position: 'absolute',
                backgroundColor: `rgba(256, 256, 256, ${overlayOpacity})`,
                textAlign: 'center'
            }}>
                <h1 style={{marginTop: '10%', marginLeft: '100px'}}> Please sign in before plucking or chucking!</h1>
                <button onClick={() => {resetOpacities()}}> ok FOINE </button>
            </div>
            <div 
                style={{ 
                    margin: '50px', 
                    opacity: `${postOpacity}`,
                }}
            >
                <div className={classes.root}>
                    <IconButton 
                    style={{}}
                    onClick={() => {getOneRandomPost()}}>
                        <p> Skip </p>
                        <NavigateNextIcon />
                    </IconButton>
                </div>
                <Card 
                    id={postId}
                    url={picUrl}
                    title={titleText}
                    description={descriptionText}
                    downvotes={postDownvotes}
                    upvotes={postUpvotes}
                    onclick={() => setOpacities()}
                />
            </div>
        </div>
    )
}