import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { ImageType, SocialType } from "@utils/types";

const ContactInfoCard = ({
    className,
    phone,
    email,
}) => {
    return (
        <div className={cn("contact-about-area", className)}>
            <div className="description">
                <p>Let's talk! You can find me at</p>
                {phone && (
                    <span className="phone">
                        Phone: <a href={`tel:${phone}`}>+{phone}</a>
                    </span>
                )}
                {email && (
                    <span className="mail">
                        Email: <a href={`mailto:${email}`}>{email}</a>
                    </span>
                )}
            </div>
        </div>
    );
};

ContactInfoCard.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape(ImageType),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    desc: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
};

export default ContactInfoCard;
