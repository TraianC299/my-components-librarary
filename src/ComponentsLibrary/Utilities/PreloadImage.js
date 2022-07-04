import React from 'react'

class PreloadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            src: null,
            placeholder: this.props.placeholder || null,
        };
    }
    componentDidMount() {
        if (this.props.lazy && 'IntersectionObserver' in window) {
            this.setObserver();
        } else {
            this.setPreloader();
        }
    }
componentWillUnmount() {
        if (this.observer) this.observer.disconnect();
        if (this.preloader) this.preloader.onload = null;
    }
setObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setPreloader();
                    this.observer.disconnect();
                }
            });
        });
        this.observer.observe(this.el);
    }
    setPreloader() {
        this.preloader = new Image();
        this.preloader.onload = () => {
            this.setState({
                loaded: true,
                src: this.props.src
            });
        };
        this.preloader.onerror = () => {
            this.setState({
                loaded: true,
                src: this.state.placeholder
            });
        };
        this.preloader.src = this.props.src;
    }
    render() {
        return (
            <div className="preload-image" ref={(el) => this.el = el}>
                <img alt={this.props.alt}  src={this.state.src || this.state.placeholder}
                     ref={(el) => this.el = el}
                     onError={(e) => {
                         e.target.src = this.state.placeholder;
                     }}
                     />
            </div>
        );
    }
}
export default PreloadImage