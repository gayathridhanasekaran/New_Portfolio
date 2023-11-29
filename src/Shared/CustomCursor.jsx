import React, { useCallback, useEffect, useRef, useState } from 'react';

function useEventListener(eventName, handler, element = document) {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener;
    if (!isSupported) return;

    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

function AnimatedCursor({
  outerScale = 5,
  innerScale = 0.7,
}) {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    cursorInnerRef.current && (cursorInnerRef.current.style.top = `${clientY}px`);
    cursorInnerRef.current && (cursorInnerRef.current.style.left = `${clientX}px`);
    endX.current = clientX;
    endY.current = clientY;
  }, []);

  const animateOuterCursor = useCallback(() => {
    if (coords.x !== undefined && coords.y !== undefined) {
      coords.x += (endX.current - coords.x) / 8;
      coords.y += (endY.current - coords.y) / 8;
      cursorOuterRef.current && (cursorOuterRef.current.style.top = `${coords.y}px`);
      cursorOuterRef.current && (cursorOuterRef.current.style.left = `${coords.x}px`);
    }
    requestAnimationFrame(animateOuterCursor);
  }, [coords]);

  useEffect(() => {
    requestAnimationFrame(animateOuterCursor);
    return () => cancelAnimationFrame(requestAnimationFrame);
  }, [animateOuterCursor]);

  useEffect(() => {
    const innerRef = cursorInnerRef.current;
    const outerRef = cursorOuterRef.current;

    if (innerRef && outerRef) {
      const scale = isActive ? innerScale : 1;
      innerRef.style.transform = `scale(${scale})`;
      outerRef.style.transform = `scale(${isActive ? outerScale : 1})`;
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    const innerRef = cursorInnerRef.current;
    const outerRef = cursorOuterRef.current;

    if (innerRef && outerRef) {
      const scale = isActiveClickable ? innerScale * 1.3 : innerScale;
      innerRef.style.transform = `scale(${scale})`;
      outerRef.style.transform = `scale(${isActiveClickable ? outerScale * 1.4 : outerScale})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    const innerRef = cursorInnerRef.current;
    const outerRef = cursorOuterRef.current;

    if (innerRef && outerRef) {
      const opacity = isVisible ? 1 : 0;
      innerRef.style.opacity = opacity;
      outerRef.style.opacity = opacity;
    }
  }, [isVisible]);

  useEventListener('mousemove', onMouseMove, document);
  useEventListener('mousedown', () => setIsActive(true), document);
  useEventListener('mouseup', () => setIsActive(false), document);
  useEventListener('mouseenter', () => setIsVisible(true), document);
  useEventListener('mouseleave', () => setIsVisible(false), document);

  useEffect(() => {
    const handleMouseOver = () => setIsActive(true);
    const handleClick = () => {
      setIsActive(true);
      setIsActiveClickable(false);
    };
    const handleMouseDown = () => setIsActiveClickable(true);
    const handleMouseUp = () => setIsActive(true);
    const handleMouseOut = () => {
      setIsActive(false);
      setIsActiveClickable(false);
    };

    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );

    clickables.forEach((el) => {
      el.style.cursor = 'none';

      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('click', handleClick);
      el.addEventListener('mousedown', handleMouseDown);
      el.addEventListener('mouseup', handleMouseUp);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('click', handleClick);
        el.removeEventListener('mousedown', handleMouseDown);
        el.removeEventListener('mouseup', handleMouseUp);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [isActive, isActiveClickable]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the media query as needed
    const handleMediaQueryChange = () => {
      setIsVisible(!mediaQuery.matches);
    };
    handleMediaQueryChange();
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <div ref={cursorOuterRef} className="cursorOuter" />
          <div ref={cursorInnerRef} className="cursorInner" />
        </>
      )}
    </>
  );
}

export default AnimatedCursor;
