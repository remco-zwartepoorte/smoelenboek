import React, { Component } from 'react';

export default class Icon extends Component {
  static defaultProps = {
    color: 'white',
    width: '60px',
    height: '60px'
  };

  render() {
    // eslint-disable-next-line default-case
    switch (this.props.name) {
      case 'delete':
        return (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="trash-alt"
            role="img"
            viewBox="0 0 448 512"
            width={this.props.width}
            height={this.props.height}
          >
            <path
              fill={this.props.color}
              d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
            />
          </svg>
        );
      case 'arrow':
        return (
          <svg
            viewBox="0 0 25 25"
            version="1.1"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Regular_LinkArrow"
                transform="translate(-20.000000, -18.000000)"
                fill={this.props.color}
              >
                <polygon
                  id="Regular_Arrow"
                  points="39.107 26 37.692 27.414 41 30.9997 20 30.9997 20 32.9997 41 32.9997 37.692 36.726 39.107 38.14 45 31.9997"
                />
              </g>
            </g>
          </svg>
        );
      case 'arrow-reverse':
        return (
          <svg width="25px" height="13px" viewBox="0 0 25 13" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="test" fill="#000000">
                <polygon
                  id="Regular_Arrow"
                  transform="translate(12.500000, 6.070000) rotate(180.000000) translate(-12.500000, -6.070000) "
                  points="19.107 0 17.692 1.414 21 4.9997 0 4.9997 0 6.9997 21 6.9997 17.692 10.726 19.107 12.14 25 5.9997"
                />
              </g>
            </g>
          </svg>
        );
      case 'icon-arrow':
        return (
          <svg viewBox="0 0 16 19">
            <defs>
              <polygon
                id="path-1"
                points="2.96741071 0.833333333 2.96741071 4.28080241 12.7100971 9.67651367 2.5 15.5167643 2.5 19.0659587 17.3797607 10.9718831 17.2557881 8.13354492"
              />
            </defs>
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Atoms/btns/primary/text/c"
                transform="translate(0.000000, -15.000000)"
              >
                <g
                  id="Atoms/icon/-arrow"
                  transform="translate(-2.000000, 14.500000)"
                >
                  <mask id="mask-2" fill="white" />
                  <use id="Mask" fill="#D8D8D8" fill-rule="evenodd" />
                  <g
                    id="Atoms/colours/primary/denim/d"
                    mask="url(#mask-2)"
                    fill="#619AB0"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(-32.500000, -35.000000)"
                      id="Sikkens-Blue"
                    >
                      <rect x="0" y="0" width="83" height="83" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        );
      case 'edit':
        return (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="edit"
            class="svg-inline--fa fa-edit fa-w-18"
            role="img"
            viewBox="0 0 576 512"
            width={this.props.width}
            height={this.props.height}
          >
            <path
              fill={this.props.color}
              d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
            />
          </svg>
        );
      case 'chevron-left':
        return (
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            class="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            viewBox="0 0 320 512"
            width={this.props.width}
            height={this.props.height}
          >
            <path
              fill={this.props.color}
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            />
          </svg>
        );
    }
  }
}
